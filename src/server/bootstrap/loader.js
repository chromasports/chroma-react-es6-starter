import fs from 'fs'

let autoload = (dir, app) => {
  fs.readdirSync(dir).forEach((file) => {
    if (file == '.DS_Store' || file.indexOf('.js') == -1) {
      return;
    }

    var path = `${dir}/${file}`
    var stats = fs.lstatSync(path)

    if (stats.isDirectory()) {
      autoload(path, app)
    } else {
      require(path).default(app)
    }
  })
}

export default {
  autoload
}
