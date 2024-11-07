import React, { useState, FormEvent } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [ratings, setRatings] = useState<number[]>([]);

  const averageRating = ratings.length > 0 
    ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1)
    : '0.0';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() && comment.trim() && rating > 0) {
      setRatings([...ratings, rating]);
      setMessage('Terima kasih atas feedback dan rating kamu!');
      setName('');
      setComment('');
      setRating(0);
    } else {
      setMessage('Mohon isi semua bidang dan pilih rating.');
    }
  };

  return (
    <section className="container mx-auto p-6 bg-white shadow-lg rounded-lg text-center max-w-lg mt-10">
      <h2 className="text-gray-800 font-bold text-2xl mb-6">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-left font-semibold text-gray-700 mb-1" htmlFor="name">Nama:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>
        
        <div>
          <label className="block text-left font-semibold text-gray-700 mb-1" htmlFor="comment">Komentar:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Bagikan komentar Anda"
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-left font-semibold text-gray-700 mb-1">Rating:</label>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-3xl transition transform ${star <= rating ? 'text-yellow-400' : 'text-gray-300'} hover:scale-110`}
              >
                ★
              </button>
            ))}
          </div>
          {rating > 0 && <p className="text-sm text-gray-600 mt-2">Rating yang dipilih: {rating} bintang</p>}
        </div>
        
        <button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition">
          Kirim
        </button>
        
        {message && <p className="mt-4 text-green-500 font-semibold">{message}</p>}
      </form>

      {/* Display average rating */}
      <div className="mt-10 p-4 border-t border-gray-300">
        <h3 className="text-lg font-bold text-gray-700 mb-2">Rata-rata Rating</h3>
        <p className="text-4xl text-yellow-500 font-bold">{averageRating} ★</p>
      </div>
    </section>
  );
};

export default ContactForm;