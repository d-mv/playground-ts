import io, { Socket } from 'socket.io-client'

let instance: WsService | undefined

export class WsService {
  public static instance(url: string, asNew?: boolean): WsService {
    if (asNew) instance = undefined

    if (!instance) instance = new WsService(url)

    return instance
  }

  private service: Socket | undefined

  constructor(url: string) {
    this.service = io(url, { transports: ['websocket'] })

    if (this.service) {
      this.service.on('connect', () => {
        console.log('connection ► established')
      })
      this.service.on('welcome', (...data: unknown[]) => {
        console.dir(data, { depth: 15, colors: true })
      })
    }
  }

  public send(
    data: Record<string, unknown | Record<string, unknown>>,
    // callbackFn: (...args: unknown[]) => void,
  ): void {
    if (this.service)
      this.service.emit(
        '',
        data,
        // (...args: unknown[]) => {},
      )
    else console.log('unable to send')
  }
}
