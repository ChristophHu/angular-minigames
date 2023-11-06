import { APP_INITIALIZER, NgModule } from '@angular/core'
import { ConfigService } from './config.service'
import { HttpClientModule } from '@angular/common/http'

let ConfigFactory = (config: ConfigService) => {
  return () => config.load()
}

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: ConfigFactory, deps: [ConfigService], multi: true }
  ]
})

export class ConfigModule { }
