import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { getComicDetail } from '../../services/get-comic-detail'

Modal.setAppElement('#root');
const customStyles = {
};
export default function ComicDetail({ openModal, resourceURI }) {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [comicDetail, setComicDetail] = useState({});

  useEffect(() => {
    setIsOpen(openModal);
  }, [openModal])

  useEffect(() => {
    async function fetchData() {
      const fetchedComicDetail = await getComicDetail(resourceURI);
      setComicDetail(fetchedComicDetail)
    }
    fetchData();
  }, [resourceURI])


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel={comicDetail.title}
    >
      <h2>{comicDetail.title}</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
    </Modal>
  )
}