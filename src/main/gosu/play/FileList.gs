package play

uses org.slf4j.LoggerFactory

uses java.io.File

class FileList {
  static var _logger = LoggerFactory.getLogger(FileList.Class)
  static public function main(args : String[]) {
    _logger.debug("==========> {}", "Start")

    var sourcePath = "D:/wa/pc/modules/configuration/gsrc/"
    var aFile = new File(sourcePath)
    aFile.eachFileInTree(\file -> {
      if (file.isFile()) {
      //var tmp = new FileModel(file)
        _logger.debug("==> {} <==", file.Path)
      } else {
        _logger.debug("'{}' is not a file skipping", file.Name)
      }
    })

    _logger.debug("<========== {}", "End")
  }
}
