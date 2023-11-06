import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'projects/minigames/src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: any
  private _configFile: string = ''

  constructor(private _httpClient: HttpClient) {}

  load() {
    return new Promise((resolve, reject) => {
      console.log(environment.name)
      switch (environment.name) {
        case 'production':
          this._configFile = 'production'
          break
        case 'development':
          this._configFile = 'development'
          break
        case 'mock':
          this._configFile = 'mock'
          break
        default:
          this._configFile = 'development'
      }

      this._httpClient.get('./assets/config/' + this._configFile + '.json')
        .subscribe({
          next: (data: any) => {
            this._config = data
            resolve(true)
          },
          error: (error: any) => {
            console.error(error)
            resolve(false)
          }
        })
    })
  }

  isProdMode() {
    return this._configFile === 'production'
  }
  getLdapAPI(key: string): string {
    return this._config["ldapConfig"][key]
  }
  getbackend(key: string): string {
    return this._config["polwsp_service"][key]
  }
  getVersion() {
    return this._config["version"]
  }
  get(key: any) {
    return this._config[key]
  }
}