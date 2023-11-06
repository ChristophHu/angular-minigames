# Sanitize HTML

## Nutzung
```html
<img [src]="pic | sanitize:'url'" alt="pic">
```

```typescript
const pic = "data:image/png;base64,XBIWXMAAAKQAAACkAESWU"
```

## Fehler
| Nr. | Meldung | Beschreibung | Lösung |
|---|---|---|---|
|ts(2354)|Diese Syntax erfordert ein importiertes Hilfsprogramm, aber das Modul "tslib" wurde nicht gefunden.|In Zeile: `@Pipe({ name: 'sanitize' })`|`npm install tslib --save-dev`