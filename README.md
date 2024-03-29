# DeBored

DeBored is an innovative app designed to combat boredom by allowing individuals to discover new hobbies and connect with like-minded people. Our goal is to create a personalized experience by offering tailored hobby suggestions while fostering friendships among users who share common interests!

**Release:** v1.0.2 (Final)

## Directories

There are 4 top-level sub-directories detailed below:
- `.github/` contains all files for CI using GitHub Actions
- `frontend/` contains all of the frontend files including code and documentation
- `backend/` contains all of the backend files including code and documentation
- `reports/` contains all of the weekly status reports

Refer to all .md files for documentation.

## Development Guidelines 

### Setup 

1. Install the Node.js runtime (v18.18.2) and Git in order to retrieve the source code and contribute to it
      1. This is necessary in order to build, test, and the run the system
2. Run `git clone https://github.com/ttrenh/DeBored.git` to clone the DeBored source
      1. Refer to [Directories](#directories) for the layout of our directory structure
4. `cd frontend` from the cloned root directory
5. Run `npm install` to install dependencies
6. Install the Expo Go app on your mobile device from the App Store or Google Play Store
  
### Build and Run 

To build and run the system: 
1. `cd frontend` from the root directory
2. Run `npx expo start`
3. Scan the generated QR on your mobile device to launch the project

### Testing 

The root repository has GitHub Actions set up to automatically run the test suite on all pull requests and pushes to main. 

To manually test the frontend: 
1. `cd frontend` from the root directory
2. Run `npm run test` to run all of our tests

To add new tests to CI testing: 
1. Navigate into the `frontend/screens/__tests__` from the root directory
2. Create a test file with the naming convention: `TestName.test.js`
3. Write tests using the Jest JavaScript testing framework

### Build a Release 

To build a release of the software:
1. In the code and documentation, the developer should update the release version number prior to invoking the build system.
      1. Open the package.json file in the directories of the project
      2. Update the version field to a new version number following semantic versioning (e.g., "1.0.0" to "1.0.1")
3. Commit changes
4. Check that all dependencies are up to date
5. Build the Expo App with `expo build`
6. Test the build 

## Releases

### Beta Release

For our Beta Release, we focused on implementing the use case of allowing a user to take a quiz inquiring about their interests and have our app come up with activities based off of the user's answers. In addition, DeBored is able to generate new ideas in the case that the user is not enticed by a suggested activity (regenerated ideas are also based off of user's responses).

### Checkpoint Release

For our Checkpoint Release, we focused on implementing the entire basic UI for the app. We are now focusing on developing key features such as friends and location-based suggestions.

### Final Release

Completed Features and Functionality:
- AI Generated DeBored ideas
- Location-based suggestions
- Accounts
- Networking and friends systems
