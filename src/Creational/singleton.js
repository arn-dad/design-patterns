class Logger {
  #errors = []
  #infos = []
  #warns = []

  constructor() {
    if (Logger.instance === null) {
      Logger.instance = this
    }

    return Logger.instance
  }

  info(msg) {
    this.#infos.push(`${this.getDateTime()}: ${msg}`)
    console.log(msg);
  }

  error(msg) {
    this.#errors.push(`${this.getDateTime()}: ${msg}`)
    console.error(msg);
  }

  warn() {
    this.#warns.push(`${this.getDateTime()}: ${msg}`)
    console.warn(msg);
  }

  getErrors() {
    let str = ''
    this.#errors.forEach(err => str += err + '\n' );
    this.print('errors', str)
  }

  getWarns() {
    let str = ''
    this.#warns.forEach(wn => str += wn + '\n' );
    this.print('warns', str)
  }

  getInfos() {
    let str = ''
    this.#infos.forEach(inf => str += inf + '\n' );
    this.print('infos', str)
  }

  print(type, content) {
    console.log('================ '+ type +' ====================');
    console.log(content);
    console.log('====================================');
  }

  getDateTime() {
    var currentDate = new Date(); 
    return currentDate.getDate() + "/"
    + (currentDate.getMonth()+1)  + "/" 
    + currentDate.getFullYear() + " @ "  
    + currentDate.getHours() + ":"  
    + currentDate.getMinutes() + ":" 
    + currentDate.getSeconds();
  }
} 


const logger = new Logger();
Object.freeze(logger)

export default logger;