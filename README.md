## Dipendenze:

```
* 'bn.js' => creare e gestire type BigNumber
* 'number-to-bn' => convertire int e hex int to BN
```

## Utilizzo:

```
const ethConverter = require('eth-converter')

let curr = feliceUtil.toWei('10', 'ether')
let curr = feliceUtil.fromWei('10000', 'ether')
```

converts to one of the following:

    'noether': '0', 
    'wei': '1', 
    'kwei': '1000', 
    'Kwei': '1000',
    'babbage': '1000', 
    'femtoether': '1000', 
    'mwei': '1000000',
    'Mwei': '1000000',
    'lovelace': '1000000', 
    'picoether': '1000000', 
    'gwei': '1000000000', 
    'Gwei': '1000000000', 
    'shannon': '1000000000', 
    'nanoether': '1000000000', 
    'nano': '1000000000', 
    'szabo': '1000000000000', 
    'microether': '1000000000000', 
    'micro': '1000000000000', 
    'finney': '1000000000000000', 
    'milliether': '1000000000000000', 
    'milli': '1000000000000000', 
    'ether': '1000000000000000000',
    'kether': '1000000000000000000000',
    'grand': '1000000000000000000000', 
    'mether': '1000000000000000000000000',
    'gether': '1000000000000000000000000000', 
    'tether': '1000000000000000000000000000000' 