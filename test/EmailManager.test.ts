import { Email } from "../Archivos/Email";
import { Carpeta } from "../Archivos/Carpeta";

test('Se debe agregar un email a la carpeta', () => {
    const mail = new Email();
    mail.escribirMail("juan@gmail.com", "pedro@gmail.com", "Prueba", "Esta es una prueba");

    const folder = new Carpeta();
    folder.Add(mail);
    expect(folder.folder.length).toBe(1);
});