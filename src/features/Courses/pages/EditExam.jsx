import React, { useState, useEffect } from "react";
import { Plus, Trash2 } from "lucide-react";
import { useParams } from "react-router-dom";
import coursesData from "../../../data/data.json";

export default function EditExam({ onSave }) {
  const { examId } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    durationMinutes: 60,
    questions: []
  });

  useEffect(() => {
    let foundExam = null;
    for (let course of coursesData.UploadedCourses) {
      foundExam = course.exams?.find(e => e.examId === parseInt(examId));
      if (foundExam) break;
    }

    if (foundExam) {
      setFormData({
        title: foundExam.title || "",
        date: foundExam.date ? foundExam.date.slice(0,16) : new Date().toISOString().slice(0,16),
        durationMinutes: foundExam.durationMinutes || 60,
        questions: foundExam.questions?.map(q => ({
          ...q,
          options: q.options || (q.type === "multiple-choice" ? ["", "", "", ""] : []),
          answer: q.answer !== undefined ? q.answer : (q.type === "multiple-choice" ? 0 : "true")
        })) || []
      });
    }
  }, [examId]);

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [...formData.questions, { id: Date.now(), question: "", type: "multiple-choice", options: ["", "", "", ""], answer: 0 }]
    });
  };

  const updateQuestion = (index, field, value) => {
    const updated = [...formData.questions];
    updated[index][field] = value;
    setFormData({...formData, questions: updated});
  };

  const updateOption = (qIndex,optIndex,value)=>{
    const updated = [...formData.questions];
    updated[qIndex].options[optIndex] = value;
    setFormData({...formData, questions: updated});
  };

  const deleteQuestion = (index)=>{
    setFormData({...formData, questions: formData.questions.filter((_,i)=>i!==index)});
  };

  const handleSave = ()=>{
    onSave(formData);
    alert("تم تعديل الامتحان بنجاح!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-6">تعديل الامتحان</h1>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="عنوان الامتحان" value={formData.title} onChange={e=>setFormData({...formData,title:e.target.value})} className="border p-3 rounded-lg"/>
          <input type="datetime-local" value={formData.date} onChange={e=>setFormData({...formData,date:e.target.value})} className="border p-3 rounded-lg"/>
          <input type="number" min="1" value={formData.durationMinutes} onChange={e=>setFormData({...formData,durationMinutes:parseInt(e.target.value)})} className="border p-3 rounded-lg" placeholder="المدة بالدقيقة"/>
        </div>

        {/* Questions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">الأسئلة</h3>
            <button onClick={addQuestion} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <Plus size={16}/> إضافة سؤال
            </button>
          </div>

          {formData.questions.map((q, idx)=>( 
            <div key={q.id} className="border rounded-lg p-4 mb-4">
              <div className="flex justify-between mb-3">
                <input type="text" value={q.question} onChange={e=>updateQuestion(idx,"question",e.target.value)} placeholder="نص السؤال" className="flex-1 border p-2 rounded-lg mr-2"/>
                <button onClick={()=>deleteQuestion(idx)} className="text-red-500"><Trash2 size={18}/></button>
              </div>

              <select value={q.type} onChange={e=>updateQuestion(idx,"type",e.target.value)} className="border p-2 rounded-lg mb-3">
                <option value="multiple-choice">اختيار متعدد</option>
                <option value="true-false">صح أو خطأ</option>
              </select>

              {q.type==="multiple-choice" && q.options.map((opt,oIdx)=>(
                <div key={oIdx} className="flex items-center gap-2 mb-1">
                  <input type="radio" name={`q-${idx}`} checked={q.answer===oIdx} onChange={()=>updateQuestion(idx,"answer",oIdx)} />
                  <input type="text" value={opt} onChange={e=>updateOption(idx,oIdx,e.target.value)} className="flex-1 border p-2 rounded-lg" placeholder={`الخيار ${oIdx+1}`}/>
                </div>
              ))}

              {q.type==="true-false" && (
                <div className="flex gap-4">
                  <label><input type="radio" checked={q.answer==="true"} onChange={()=>updateQuestion(idx,"answer","true")}/> صح</label>
                  <label><input type="radio" checked={q.answer==="false"} onChange={()=>updateQuestion(idx,"answer","false")}/> خطأ</label>
                </div>
              )}
            </div>
          ))}
        </div>

        <button onClick={handleSave} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">حفظ التعديلات</button>
      </div>
    </div>
  );
}
