# beacon-models

![Image of Beacon](/img/beacon.jpg)

TypeScript interfaces and types for the beacons GroupBy systems receive. No
executing code is exported from the NPM package published from this repo,
only types.

## Usage from TypeScript NPM Project

Install with:

```
npm install @groupby/beacon-models
```

Import types like:

```typescript
import {
    AutoMoreRefinements,
    AutoMoreRefinementsPartial,
} from '@groupby/beacon-models';
```

or from submodules:

```typescript
import { AutoMoreRefinementsPartial } from '@groupby/beacon-models/partials';
```
