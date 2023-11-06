# ConfigService
Der `ConfigService` ist ein Service, der die Konfiguration der Anwendung zur Verfügung stellt. Die Konfiguration wird aus der Datei `config.json` geladen, die sich im Ordner `assets` befindet. Die Konfiguration wird beim Start der Anwendung geladen und kann dann über den Service abgerufen werden.

## Verwendung
```typescript
@NgModule({
  ...
  imports: [
    ConfigModule,
    ...
  ],
  ...
})
```

```typescript
import { ConfigService } from './core/services/config/config.service'
...
constructor(private _configService: ConfigService) {
    this.ldapConfig = this._configService.get('ldapConfig')
}
```

## Fehler
### Fehlermeldung: Cannot resolve all parameters for 'ConfigService'(undefined)
```error
ERROR: Error: Uncaught (in promise): Error: Cannot resolve all parameters for 'ConfigService'(undefined). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'ConfigService' is decorated with Injectable.
```

### Lösung
Der `ConfigService` muss in der `app.module.ts` in der Liste der `providers` eingetragen werden.

```typescript
import { ConfigService } from './core/services/config/config.service'

@NgModule({
  ...
  providers: [
    ...
    ConfigService
  ],
  ...
})
```
