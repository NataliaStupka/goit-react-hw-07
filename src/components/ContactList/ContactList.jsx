import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactSlice"; //useSelector
import { selectSearchFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  //контакти
  const contacts = useSelector(selectContacts); //from contactSlice, selectContacts = (state) => state.contact.items

  //для рендера не просто contacts, а і відфільтрованого
  const filter = useSelector(selectSearchFilter); //що ввели в поле пошуку

  // const getFiltredContacts = () => {
  //   return filter
  //     ? contacts.filter((item) =>
  //         item.name.toLowerCase().includes(filter.toLowerCase())
  //       )
  //     : contacts;
  // };
  // const filterContact = getFiltredContacts();

  const filterContact = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filterContact.map((contact) => (
        <li key={contact.id} className={s.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
