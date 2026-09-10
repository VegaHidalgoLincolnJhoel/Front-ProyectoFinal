import React from "react";
import { FileText, X, ShieldAlert } from "lucide-react";

export default function DocumentPreviewModal({ fileData, onClose }) {
  if (!fileData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-fade-in" role="dialog" aria-modal="true">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full border border-slate-200 overflow-hidden">
        <div className="bg-[#1E3A8A] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-amber-300" />
            <h3 className="text-base font-bold">Vista Previa de Sustento</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white font-bold text-lg cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
            <div className="p-2.5 bg-rose-100 text-rose-600 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">{fileData.archivoNombre}</p>
              <p className="text-xs text-slate-500">Documento PDF • Verificado por el sistema</p>
            </div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-slate-700 space-y-2">
            <p className="font-bold text-[#1E3A8A] flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-blue-600" />
              Documento Oficial Adjunto por Docente:
            </p>
            <p><strong>Remitente:</strong> {fileData.docente} (DNI: {fileData.dni})</p>
            <p><strong>Asunto:</strong> Justificación de {fileData.tipo} para {fileData.materia}</p>
            <hr className="border-blue-200 my-2" />
            <div className="bg-white p-3 rounded border border-blue-100 font-mono text-[11px] text-slate-600">
              [SIMULACIÓN DE VISOR PDF] <br />
              Certificamos que el documento digital presentado cuenta con validez institucional para el trámite de dispensa y justificación de asistencia docente correspondiente al ciclo 2026-I.
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#1E3A8A] hover:bg-blue-800 text-white font-semibold text-xs rounded-xl cursor-pointer transition-colors"
          >
            Cerrar Visor
          </button>
        </div>
      </div>
    </div>
  );
}