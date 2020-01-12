import fs from 'fs';

export const updateDataBaseNotes = (notes) => {
  fs.writeFileSync('./server/database/notes.txt', JSON.stringify(notes));
};

export const notesData = fs.readFileSync('./server/database/notes.txt', 'utf-8');
