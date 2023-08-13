import style from './BotonCV.module.css'
import {GrDocumentDownload} from 'react-icons/gr'

export default function BotonCV() {
    return (
      <div className={style.containerBtnCV}>
        <button className={style.btnCV}>
          <span>Descargá mi CV</span>
            <GrDocumentDownload className={style.imgD} />
        </button>
      </div>
    );
}