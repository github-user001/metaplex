<p align="center">
  <a href="https://metaplex.com">
    <img alt="Metaplex" src="https://metaplex.com/static/logos/metaplex.svg" width="250" />
  </a>
</p>

GET R DONE

## Steps to greatness

You should delete .cache/\* before you try and re-use assets

### Upload all of your assets to arweave

`yarn run upload:assets`

### Create the candy machine with the assets you uploaded

`yarn run create:machine`

**Important: Look at the output from this command as it contains your Candy Machine's public key**

### Set the release date of the candy machine

`yarn run modify:release-date`

**Important: Look at the ouput of this command as it contains the unix timestamp you'll need for later**
