import React from "react"
import { useState } from "react"
import "./filereaderpage.scss"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer"

export default function FileReaderPage() {
  const [isView, setIsView] = useState(false)
  const [data, setData] = useState([])
  const [dataAsUrl, setDataAsUrl] = useState("")
  const isFileContent = data?.length > 0
  const isFileContentOrDataAsUrl = data?.length > 0 || dataAsUrl

  const onUploadHandler = (e) => {
    setData(Array.from(e.target.files))
  }

  const downloadCDocHandler = () => {
    if (isFileContentOrDataAsUrl) {
      const preparedFile = new Blob([data.fileContent])
      const element = document.createElement("a")
      element.href = URL.createObjectURL(preparedFile)
      const fileExt = detectFileExt(data.fileName)
      element.download = "fileDoc" + "." + fileExt
      document.body.appendChild(element)
      element.click()
    }
  }

  const detectFileExt = (fileName) => {
    return fileName.split(".")[1]
  }

  const deleteDocHandler = () => {
    if (isFileContentOrDataAsUrl) {
      setData({
        fileName: null,
        fileContent: null,
      })
      setDataAsUrl("")
      toggleViewHandler()
    }
  }

  const toggleViewHandler = () => {
    if (isFileContent || dataAsUrl) {
      setIsView((prev) => !prev)
    }
  }

  const docViewerConfig = {
    header: {
      disableHeader: true,
      disableFileName: true,
      retainURLParams: true,
    },
  }

  const btnData = [
    {
      title: "Download",
      onClick: downloadCDocHandler,
    },
    {
      title: "AC",
      onClick: deleteDocHandler,
    },
    {
      title: isView ? "Hide" : "Read",
      onClick: toggleViewHandler,
    },
  ]

  return (
    <section className="section__padding doc_viewer_container">
      <div className="upper">
        <label class="input-file">
          {data && <p className="file_reader_doc_table">{data[0]?.name}</p>}
          <input
            className=".input-file"
            onChange={(e) => onUploadHandler(e)}
            type="file"
            name="file"
            // accept="image/*,application/pdf,application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,zip"
          />
          <h3 style={{ cursor: "pointer" }}>{data[0]?.name === null ? "Upload doc" : "Change doc"}</h3>
        </label>
        {btnData.map(({ title, onClick }) => (
          <h3 style={{ cursor: "pointer", color: !isFileContentOrDataAsUrl && "gray" }} onClick={onClick}>
            {title}
          </h3>
        ))}
        <input
          className="input_type_text_data_as_url"
          type="text"
          value={dataAsUrl}
          onChange={(e) => setDataAsUrl(e.target.value)}
          placeholder="https://..."
        />
      </div>
      {isView && (
        <div className="content_viewer_container">
          {isFileContent ? (
            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={data.map((file) => {
                console.log("file at map: ", detectFileExt(file.name))
                return {
                  uri: window.URL.createObjectURL(file),
                  fileType: detectFileExt(file.name),
                }
              })}
              config={docViewerConfig}
              style={{ height: 1000 }}
            />
          ) : (
            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={[
                {
                  uri: dataAsUrl,
                  fileType: dataAsUrl.split(".")[dataAsUrl.split(".").length - 1],
                },
              ]}
              config={docViewerConfig}
              style={{ height: 1000 }}
            />
          )}
        </div>
      )}
    </section>
  )
}
