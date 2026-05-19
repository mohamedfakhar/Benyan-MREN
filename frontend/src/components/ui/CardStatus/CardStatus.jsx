import Styles from "./CardStatus.module.css"
function CardStatus({ counter, title }) {
    return (  
        <>

        {/* parent card */}
                <div className= {`${Styles.cardStatus} d-flex align-items-center`}>
                     {/* icon oarent */}
                     <div className={`${Styles.icon} d-flex align-items-center justify-content-center w-100`}>
                        <i class="fa-solid fa-building"></i>
                     </div>
                     {/* info */}
                <div className={`${Styles.info} w-100 d-flex flex-column align-items-center gap-2  `}>
                    <span className={Styles.counter}> {counter}</span>
                    <span className={Styles.title}> {title}</span>

                </div>
                </div>
        </>
        );
}
export default CardStatus;