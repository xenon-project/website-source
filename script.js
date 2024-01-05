const simpleGit = require('simple-git');
const fs = require('fs');

const buildDir = '.vitepress/build';
const repo = simpleGit();

async function pushBuildToDeploy() {
  try {
    await repo.checkout('deploy', { create: true }); // Create branch if it doesn't exist

    const filesToAdd = fs.readdirSync(buildDir).map(file => `${buildDir}/${file}`);
    await repo.add(filesToAdd);

    await repo.commit('Pushing updated build files to deploy branch');
    await repo.push('origin', 'deploy');

    console.log('Build files successfully pushed to the deploy branch!');
  } catch (error) {
    console.error('Error pushing build files:', error);
  }
}

pushBuildToDeploy();