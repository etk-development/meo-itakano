import styles from "./togoogle.module.css"
import Image from "next/image";

import experience from "../../public/togoogle/experience.svg";
import paste from "../../public/togoogle/paste.svg";
import paste_comp from "../../public/togoogle/paste_comp.svg";
import post from "../../public/togoogle/post.svg";
import star from "../../public/togoogle/star.svg";
import explain from "../../public/togoogle/explain.svg";
import iphone from "../../public/togoogle/iphone.svg";
import contact from "../../public/togoogle/contact.svg";


const Togoogle =(props)=> {

    const copyToClipboard=()=>{
        const copyTarget = props.comment;
        console.log(props.comment)
        navigator.clipboard.writeText(copyTarget)
    }

    return <div className={styles.container}>
                <div className={styles.title}>
                    <h1 >アンケート</h1>
                    <h1 >ありがとうございました。</h1>
                    {/* <p className={styles.id}>回答日時：　,回答ID：</p> */}
                </div>

                <div className={styles.message}>
                    <Image src={explain} alt="explain" className={styles.image} />
                    <div>
                        <p >よろしければ</p>
                        <p >Googleの口コミへの投稿にも</p>
                        <p >ご協力お願いします！</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <h1>ボタンを押すと、「自由にコメント欄」</h1>
                    <h1>の内容がコピーされます。</h1>
                    <a href="https://www.google.com/maps/place/%E4%BA%95%E9%AB%98%E9%87%8E%E6%AD%AF%E7%A7%91%E5%8C%BB%E9%99%A2/@34.7608064,135.5415705,17z/data=!4m6!3m5!1s0x6000e39686a35fe9:0xbac572bbf57db511!8m2!3d34.7608064!4d135.5415705!16s%2Fg%2F11b7ky656j?entry=ttu">
                        <button onClick={copyToClipboard} className={styles.button}>
                            コピーしてGoogleへ
                        </button>
                    </a>
                    <p  className={styles.id}>ボタンを押すとGoogleアカウントページに移動します。口コミ欄で内容をペースト（貼り付け）してご利用ください。</p>
                </div>

                <div className={styles.message}>
                    <div>
                        <h1>Googleアカウントページに</h1>
                        <h1>進んだ後のステップです。</h1>
                    </div>
                    <Image src={iphone} alt="iphone" className={styles.image} />
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>「この場所での自分の体験や感想を共有しましょう」部分をタップ</h1>
                    </div>
                    <div>
                        <Image src={experience} alt="experience" className={styles.itemimage} />
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>入力欄を長押しして「ペースト」が表示されたらタップ</h1>
                    </div>
                    <div>
                        <Image src={paste} alt="paste" className={styles.itemimage} />
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>テキストがペーストされたら「完了」をタップ</h1>
                    </div>
                    <div>
                        <Image src={paste_comp} alt="paste_comp" className={styles.itemimage} />
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>★（星）をタップ</h1>
                    </div>
                    <div>
                        <Image src={star} alt="star" className={styles.itemimage} />
                    </div>
                </div>

                <div className={styles.item}>
                    <div>
                        <h1 className={styles.header}>画面下にある「投稿」をタップしたら完了です</h1>
                    </div>
                    <div>
                        <Image src={post} alt="post" className={styles.itemimage} />
                    </div>
                </div>

                <div className={styles.message}>
                    <Image src={contact} alt="contact" className={styles.image} />
                    <div>
                        <h1>さっそく</h1>
                        <h1>GoogleページへGO!</h1>
                    </div>
                </div>

                <div className={styles.card}>
                    <h1>ボタンを押すと、「自由にコメント欄」</h1>
                    <h1>の内容がコピーされます。</h1>
                    <a href="https://www.google.com/maps/place/%E4%BA%95%E9%AB%98%E9%87%8E%E6%AD%AF%E7%A7%91%E5%8C%BB%E9%99%A2/@34.7608064,135.5415705,17z/data=!4m6!3m5!1s0x6000e39686a35fe9:0xbac572bbf57db511!8m2!3d34.7608064!4d135.5415705!16s%2Fg%2F11b7ky656j?entry=ttu">
                        <button onClick={copyToClipboard} className={styles.button}>
                            コピーしてGoogleへ
                        </button>
                    </a>
                    <p className={styles.id}>ボタンを押すとGoogleアカウントページに移動します。口コミ欄で内容をペースト（貼り付け）してご利用ください。</p>
                </div>
        </div>
}

export default Togoogle