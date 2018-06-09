import React from 'react';
import styles from './revenue.scss';
import Slider from "react-slick";

const yakirImg = 'https://lh3.googleusercontent.com/DqG14ZZ7OgdgVtfvBCtZTQPDH8KT-E5sPC7VeuW312vQVkfnqtcVyeUVYAMh55RNDmFeZczYMcvWbUqKuyLVIibp888Gv5dkg8z0QLDIbbSayu9BfI2GpRG0f5jFAkKtIaC90hjreGBW4Ygbvk05Qeyx4xvk4B2b7hoAT3KZOY6Gyj0IOajpKMMRDTY8dhfP2IisEXaglfZZWhsBjZFujtn1FRcL-7Id91AroV--8Hh2SOF8IgRZewnhj-i8xR5jeJE24-2lD35qhOgaTw1z3X1Ae-S-MqeGvj15rAWmexBJ41XSCpnYP-IC6oAD696wB3Ac6P8vvywWBgbwlwC8w6DyzQIDlzKvizaPFj1f2ujK9uihS4EPTVFw6O2N8S38ZCmff3vIm5Lmh9krVzow8wQtNmWAkzErCr2ENn6BIhoEHd9gVe8tOJTxq70kyh9TKSgajsvdOFav_PZWT1ufq0SKfSNtQtgA_j63QNZaoQb-EPqmRc_fGvu6ur6aeVfvSH1K-biCMP-XRq2cNB2H_arOgY_PPLW7zY5BHvMCISbl4bf8xcM-QBUv_RVaIlIpmcgH0FcIFBiZa_vmWpV5_VgeYTiekdf_vQBg9vo=w950-h713-no'
const aviueImg = 'https://lh3.googleusercontent.com/GdnsSNohvtSeSWdVFaDe1dlwt1thUd2EJmm4HLjm_0JPabI6q21euMOQ3XxCnmePU-9kDJZuQ2eNuWv2JoPJlA5C02Lllaa_PWMrio58yU4SBaADS5AXRETiBlDkssmie9oYA99wOE3XnJlEitGbH3i5gYz2gTnfOi4tSd2SJAnsIbsOdp0CkiAmYlzJafSibHr8kqQ3ebI0cD4blsZcZgMP6xDSykdV09PuixNgpZ_396Zh4Ml28l92Qn6tgFUdtyg9J03vh-S35A23RxuVIIPbIjhCZNS9fG0Cu30DqHTNqi9WhhAdJPVaToHh8-NKOE2LhfNZBhMXX9jf96nURBfK84FHUk2vwUIBj9n3Q11OLz0LVnNMRl6e2q0gJfh2jSLzGEMg6GyhSCLOsPd5mGZn8LpB5O5BquPyxGRuEld61m7VA9s5qd_eHnkFsYd7E_JYzvHMfyH8-irHIV-SVhCEPf-xNPaQBufNXFkZVLImwDtqIsFaAsoaUxQOHM265cpnXCnOST7g59sMWo-biTZ_b95KSjU-MORfDyXxfmO9XfD24dpeOA2mPyCGqaCnm7rft1ey4kahphNItogiDFrGvDBTVkXL4OycVz0=s225-no'
const iaacovImg = 'https://lh3.googleusercontent.com/25O0RMuFLxt_bMkk4GrUWHeAxCMmn5P7GEX_t4-Rl5DF5LEgbGYvZt2KpARE1Z82Yt7ffHMrtZXXHJFnF2mxTh8wJuatw2eAFkebJfWs4-MHzjVu-J7jcJV6PeP5dEJClbZlVB5PIRYmAtxmpK7e_w3-Ll9F3j6FuuercYqxplbatU6k4GzcNdpT2GRYYHc_nM7sabmDgb--KpDhp-MKg7v8XC6Lo4uz28A6aDHKQBFibjXBLOGztHBYcgrkiGTMtdZU8feXjb6MpwXhNg6Zem_G41tcNho6mZ2XQqeaZZsvsVB2OKzo2YKTod_giRpBqg8u6l8xnSRl587uQoSVReMuuo75OrmyXaCZ6Lc7RHks9WwXQAYolFlABzemNFkb35G_yP2AmCg63AvS_16GjQtIxKBlV6phh-6ri3GhoI6zzgq0KyDqIjUsrz_KHZaBDuUW74JRWJhJuw8hhU8xavwM8Q0PTmQc-OUcxqMamCJx0P3zCrLQwDaqPVjKt5uMzf0wswRJV44RaCHTv3lODQEiNQQYWRh-yVxDPwzrnd8xnLBSk3rJVzgvRtmLHogHIUOxggNCv3l9zC-xPCwh160REO6QUj57SAO4PpY=s200-no'
const data = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const SampleArrow = () => (
    <div />
)

const Test = () => {

    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
      };
  

    return(
        <div className={styles.container} >
            
            <div className={styles.pageTitle} >
                <div className={styles.routeName}>Contributors</div>
                <div className={styles._logo}>
                    <div className={styles.logo}>N</div>
                </div>
                <div className={styles.title}>etomation</div>
                <div className={styles.titleLogo}></div>
            </div>
            <Slider className={styles.mainContent} {...settings}>
                <div className={styles.test}>
                    <div className = {styles.picAvatar}>
                        <img src={require('./assets/IaacovExman.png')} className={styles.img} />
                    </div>
                    <div className={styles.contentAvatar}>
                        <p>
                            {data}
                        </p>
                    </div>
                </div>
                {/* <div className={styles.test}>
                    <div className = {styles.picAvatar}>
                        <img src={require('../../../../assets/yakir.png')} className={styles.img} /> 
                    </div>
                    <div className={styles.contentAvatar}>
                        <p>
                            {data}
                        </p>
                    </div>                
                </div>
                <div className={styles.test}>
                    <div className = {styles.picAvatar}>            
                        <img src={aviueImg} className={styles.img} />
                    </div>
                    <div className={styles.contentAvatar}>
                        <p>
                            {data}
                        </p>
                    </div>
                </div> */}
            </Slider>
        </div>
    )
}

export default Test;