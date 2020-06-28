# Zeddic.com
This is the repo for my personal site [zeddic.com](https://zeddic.com).
It is currently built using [GatsbyJS](https://gatsbyjs.com)

## Local Development
[Setup node](https://www.gatsbyjs.org/tutorial/part-zero/)

```shell
# Checkout
git clone zeddic.com https://github.com/zeddic/zeddic.com.git

# Install deps
cd zeddic.com/www
npm install

# Run
gatsby develop -H 0.0.0.0
```

### Gatsby and WSL2
There are a few gotchas when using WSL2 for development

1. The project should be built from a non mounted path \
   (eg `~/code/`, and *not* `c/mnt/code/`).
   This has [better performance at the moment](https://github.com/microsoft/WSL/issues/4197).

1. Gatsby can't bind to localhost ([bug](https://github.com/gatsbyjs/gatsby/issues/15163)). \
   Look for the local IP address to be displayed by the Gatsby startup script

## Deployments
Deployments are push-on-green. They are automated via a Github Action workflow that builds and deploys the contents of the Gatsby site to [zeddic.com](https://zeddic.com)