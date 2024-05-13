// src/components/DocumentList.tsx

import React, { useState } from 'react';

const DocumentList: React.FC<{ documents: string[] }> = ({ documents }) => {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const handleDocumentClick = (document: string) => {
    setSelectedDocument(document);
  };

  return (
    <div>
      <ul className="list-group">
        {documents.map((document) => (
          <li
            key={document}
            className="list-group-item"
            onClick={() => handleDocumentClick(document)}
            style={{ cursor: 'pointer' }}
          >
            {document}
          </li>
        ))}
      </ul>

      {selectedDocument && (
        <div className="mt-4">
          <h3>Previsualización:</h3>
          <iframe
            src={`/documents/${selectedDocument}`}
            width="100%"
            height="600"
            frameBorder="0"
          />
        </div>
      )}
    </div>
  );
};

export default DocumentList;
