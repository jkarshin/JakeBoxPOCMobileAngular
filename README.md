# angular-ivy-geltpx

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-ivy-geltpx)

# Steps to build locally:

1. Checkout and pull latest changes via Git
1. Install dependencies via `npm install`
1. Run `ng build --prod`
1. Copy the `dist` directory to {TOMCAT_ROOT}/webapps/ROOT
1. Start Tomcat
1. Access the app via `localhost:8080/dist/demo/index.html`
   - The `index.html` suffix is optional; `localhost:8080/dist/demo/` will also work
1. Rename the directories to change the URL
