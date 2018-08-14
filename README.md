
# electron-express-react-webpack
Demo Electron App using React + Webpack
![w10 sample](https://user-images.githubusercontent.com/11739632/37350993-59ad48d4-26da-11e8-9ac5-d3539cf1e2f9.PNG)

## Install
``` bash
# Clone the repository
$ git clone https://github.com/pastahito/electron-express-react-webpack

# Go into the repository
$ cd electron-react-webpack

# Install dependencies
$ npm install
```

## Develop
``` bash
$ npm start
```

## Folder structure
```
├── electron-express-react-webpack/             # Your project's name, you can rename it

    ├── app/

        ├── build/                     # Webpack will manage this folder for you
            ├── bundle.css             # Bundled CSS
            ├── bundle.js              # Bundled JS
            ├── ...                    # Your images will be copied here

        ├── src/
            ├── components/            # React Components
                ├── App/               
                    ├── index.js       # React main component where routing happens
                ├── Input/             # To keep them modularized follow this structure:
                    ├── index.js       # Your component's React code
                    ├── index.scss     # Your component's scoped CSS
                ├── Form/
                    ├── index.js
                    ├── index.css

            ├── images/                # Images
                ├── electron.png
                ├── react.png
                ├── webpack.png

            ├── scss/                  # Sass Style Scripts
                ├── main.scss          # Sass Imports
                ├── _bootstrap.scss    # Bootstrap Modules
                ├── _typography.scss   # Sitewide Typography

            ├── views/                 # Where components are stacked to form views
                ├── home/               
                    ├── index.js       # Homepage View
                ├── contact/           
                    ├── index.js     
                    ├── index.scss     



        ├── index.html                 # This HTML only uses build/ folder's files

    ├── main_process.js                # Electron's main process. Whole app is launched from here
    ├── package.json
    ├── webpack.config.js              # Webpack setup
```
