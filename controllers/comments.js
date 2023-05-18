const Run = require('../models/run'); 

module.exports = {
  create,
  // Add this export
  delete: deleteComment
};

async function deleteComment(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const run = await Run.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
  // Rogue user!
  if (!run) return res.redirect('/runs');
  // Remove the comment using the remove method available on Mongoose arrays
  run.comments.remove(req.params.id);
  // Save the updated run doc
  await run.save();
  // Redirect back to the run's show view
  res.redirect(`/runs/${run._id}`);
}

async function create(req, res) {
  const run = await Run.findById(req.params.id);

  // Add the user-centric info to req.body (the new comment)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  // We can push (or unshift) subdocs into Mongoose arrays
  run.comments.push(req.body);
  try {
    // Save any changes made to the run doc
    await run.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/runs/${run._id}`);
}