# Live site Link

[Live Site: Tour of Heores](https://rafia-farooq.github.io/tour-of-heroes)

# Deploy to GitHub Pages

- In the terminal of the project - using angular-cli-gh-pages
- Make sure *** git remote -v *** cmd shows url and not ssh connection @github...

```
origin  https://github.com/rafia-farooq/tour-of-heroes.git (fetch)
origin  https://github.com/rafia-farooq/tour-of-heroes.git (push)
```

-Otherwise run this command

```
git remote set-url origin https://github.com/rafia-farooq/tour-of-heroes.git

```

- Then run 

```terminal
ng deploy --base-href=/tour-of-heroes/
```

Revert back 

```
git remote set-url origin git@github.com:rafia-farooq/tour-of-heroes.git
```

# TourOfHeroes

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

