import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { Document, Page, pdfjs } from "react-pdf";

import "./Resume.scss";

// Import the worker as a URL so Vite copies it into your build
import pdfWorker from "pdfjs-dist/build/pdf.worker.mjs?url";
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = () => {
  const [pdfBlob, setPdfBlob] = useState<Blob | MediaSource | null>(null);
  const [width, setWidth] = useState(1200);
  const [isPdfFetched, setIsPdfFetched] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const fetchPdfFile = () => {
    // const resumeLink =
    //   "https://raw.githubusercontent.com/gautam4455/imghub/2799181d3f3df1fbe29dd026efebc59d6db07913/GK-2022.pdf";

    const resumeLink = "./GK-2026.pdf";

    fetch(resumeLink)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch file");
        }
        return response.blob();
      })
      .then((blob) => {
        setPdfBlob(blob);
        setIsPdfFetched(true);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  };

  function downloadFile(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!pdfBlob) return;

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(pdfBlob);

    // Create an anchor element
    const a = document.createElement("a");
    a.href = url;
    a.download = "Gautam-Kamble-Resume.pdf"; // Specify the desired filename here
    document.body.appendChild(a);
    a.click(); // Programmatically trigger the anchor click event
    window.URL.revokeObjectURL(url); // Release the object URL
  }

  useEffect(() => {
    if (!isPdfFetched) {
      fetchPdfFile();
    }
  }, [isPdfFetched]);

  const getPageWidth = () => {
    return (width / 100) * 0.12;
  };

  return (
    <div className="resumeSection">
      <div className="heading">
        <h1>Resume</h1>
      </div>

      <div className="resume-container mb-5">
        <div className="btn-box">
          <button
            className="mybtn"
            onClick={downloadFile}
            aria-label="Download CV"
          >
            <FaDownload />
            &nbsp;Download CV
          </button>
        </div>

        <div className="pdf">
          {pdfBlob && (
            <Document
              file={URL.createObjectURL(pdfBlob)} // Use the temporary URL directly
              onLoadSuccess={({ numPages }: { numPages: number }) =>
                setNumPages(numPages)
              }
              className="my-3 document"
            >
              <Page pageNumber={numPages} scale={getPageWidth()} />
            </Document>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resume;
