# Crunchyroll Chunk Fix

Userscript fixes the error `Uncaught (in promise) TypeError: can't access property "devicePlatform", e is undefined` when using the [Croptix](https://github.com/stratumadev/croptix) Extension.<br>
It does this by overwriting the network request for the chunk causing the issue, to a fixed chunk hosted on my own website.

Requires Tampermonkey/ViolentMonkey/Whatever userscript extension to function.<br>
[Install Userscript](https://git.multarix.com/Multarix/Crunchyroll-Chunk-Fix/raw/branch/main/crunchy.user.js)