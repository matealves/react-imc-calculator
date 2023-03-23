import { Level } from "../../helpers/imc";
import styles from "./GridItem.module.css";
import upImage from "../../assets/images/up.png";
import downImage from "../../assets/images/down.png";

type Props = {
  data: Level;
};

export const GridItem = ({ data }: Props) => {
  return (
    <div className={styles.main} style={{ backgroundColor: data.color }}>
      <div className={styles.gridIcon}>
        <img src={data.icon === "up" ? upImage : downImage} width="30" />
      </div>
      <div className={styles.gridTitle}>{data.title}</div>

      {data.valueImc && (
        <div className={styles.valueImc}>
          Seu IMC é de {data.valueImc} kg/m²
        </div>
      )}

      <div className={styles.gridInfo}>
        <>
          Está entre <strong>{data.imc[0].toFixed(1)}</strong> e{" "}
          <strong>{data.imc[1].toFixed(1)}</strong>
        </>
      </div>
    </div>
  );
};
