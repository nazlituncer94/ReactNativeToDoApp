React Native To Do List Application 
Nazli Tuncer (nt2320)

This repository contains all the code written for the cross-platform To Do List application built.

HOW TO RUN APP: 
——
Pre-requisites: * Install Homebrew by pasting the following at a Terminal prompt: /usr/bin/ruby -e "$(curl –fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"* Install dependencies by running following commands in a Terminal: 
brew install watchman brew install node Watchman: Tool by Facebook that improved the app’s performance and watches for changes in the file system. Node: Installs npm, which is needed to download React Native command line interface (CLI) and package manager for Javascript.* Install React Native CLI by running following commands in a Terminal:npm install –g react-native-cli* Install yarn, a package manager for Javascript, to simplify the dependency management workflow: npm install –g  yarn yarn* Download the latest version of XCode from the Mac App Store. React Native does not have a separate simulator but instead works with the iOS simulator in Xcode so this step is required to view the app on your laptop. 
———  1) Download (or fork/clone) GitHub repo. Open a Terminal prompt and change your directory to where you’ve downloaded the repo on your laptop, selecting the “workshop-react-native” folder (“cd user/filename/workshop-react-native”). 2) Within the selected directory, type “react-native run-ios”. This will run the Xcode iOS simulator for you to view the app (Xcode does not need to be running in the background as the simulator can be initiated separately). 3) The “To Do List” application is running. Add reminders and delete completed tasks to see the app at work. UNDERSTANDING CODE STRUCTURE: 

The code structure of the React Native app: * Common code = Found in the “components” folder within repo	- AddItem.js = Handles user input and adds to to do list.	- Filter.js = Distinguishes between “done” and “still on the list” items.	- Row.js = Generates additional row for each item added by user.	- ToDoList.js = Complete view of application (bringing together other components)* ios folder & index.ios.js → Contains iOS specific code after compile* android folder & index.android.js → Contains Android specific code after compile

For further explanation and screenshots of the working app please see my final report (section 6). 

TUTORIALS USED: 
This application was initiated using the React Native teaching workshop (reference: https://github.com/vtex/workshop-react-native).The repo was cloned as directed on workshop instructions and was referenced in building the application (the final version is not the same as that of the tutorial as this was used for guidance). Additional documentation was used for modifications - to see additional tutorials please see my final report (section 5). 

