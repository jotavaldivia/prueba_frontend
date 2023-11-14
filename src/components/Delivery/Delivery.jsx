import React from 'react'
import s from './Delivery.module.css'
const Delivery = () => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Tipo de Entrega:</h3>
            <div className={s.container_options}>
                <div className={s.despacho}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M1.875 8.31171H7.5V9.24921H1.875V8.31171ZM0.9375 5.96796H5.625V6.90546H0.9375V5.96796Z" fill="#EB00D3" />
                        <path d="M14.0245 8.59577L12.6183 5.31452C12.5822 5.23018 12.5221 5.1583 12.4456 5.1078C12.369 5.0573 12.2792 5.03041 12.1875 5.03046H10.7813V4.09296C10.7813 3.96864 10.7319 3.84941 10.644 3.7615C10.5561 3.67359 10.4368 3.62421 10.3125 3.62421H2.8125V4.56171H9.84375V10.4473C9.63016 10.5714 9.44323 10.7364 9.29375 10.9331C9.14427 11.1297 9.0352 11.354 8.97282 11.593H6.02719C5.9131 11.1511 5.64177 10.766 5.26406 10.5099C4.88635 10.2537 4.4282 10.1441 3.97547 10.2017C3.52275 10.2592 3.10654 10.4798 2.80485 10.8222C2.50317 11.1646 2.33673 11.6053 2.33673 12.0617C2.33673 12.5181 2.50317 12.9588 2.80485 13.3012C3.10654 13.6436 3.52275 13.8643 3.97547 13.9218C4.4282 13.9793 4.88635 13.8697 5.26406 13.6136C5.64177 13.3574 5.9131 12.9723 6.02719 12.5305H8.97282C9.07479 12.9328 9.30799 13.2896 9.63552 13.5444C9.96306 13.7993 10.3662 13.9377 10.7813 13.9377C11.1963 13.9377 11.5994 13.7993 11.927 13.5444C12.2545 13.2896 12.4877 12.9328 12.5897 12.5305H13.5938C13.7181 12.5305 13.8373 12.4811 13.9252 12.3932C14.0131 12.3053 14.0625 12.186 14.0625 12.0617V8.78046C14.0625 8.71695 14.0496 8.65411 14.0245 8.59577ZM4.21875 12.9992C4.03333 12.9992 3.85208 12.9442 3.69791 12.8412C3.54374 12.7382 3.42357 12.5918 3.35262 12.4205C3.28166 12.2492 3.26309 12.0607 3.29927 11.8788C3.33544 11.697 3.42473 11.5299 3.55584 11.3988C3.68695 11.2677 3.854 11.1784 4.03586 11.1422C4.21771 11.106 4.40621 11.1246 4.57752 11.1956C4.74883 11.2665 4.89524 11.3867 4.99826 11.5409C5.10127 11.695 5.15625 11.8763 5.15625 12.0617C5.15601 12.3103 5.05715 12.5486 4.88139 12.7243C4.70563 12.9001 4.46732 12.999 4.21875 12.9992ZM10.7813 5.96796H11.8781L12.8831 8.31171H10.7813V5.96796ZM10.7813 12.9992C10.5958 12.9992 10.4146 12.9442 10.2604 12.8412C10.1062 12.7382 9.98607 12.5918 9.91512 12.4205C9.84416 12.2492 9.82559 12.0607 9.86177 11.8788C9.89794 11.697 9.98723 11.5299 10.1183 11.3988C10.2495 11.2677 10.4165 11.1784 10.5984 11.1422C10.7802 11.106 10.9687 11.1246 11.14 11.1956C11.3113 11.2665 11.4577 11.3867 11.5608 11.5409C11.6638 11.695 11.7188 11.8763 11.7188 12.0617C11.7185 12.3103 11.6197 12.5486 11.4439 12.7243C11.2681 12.9001 11.0298 12.999 10.7813 12.9992ZM13.125 11.593H12.5897C12.4864 11.1914 12.2529 10.8355 11.9256 10.581C11.5983 10.3266 11.1958 10.1879 10.7813 10.1867V9.24921H13.125V11.593Z" fill="#EB00D3" />
                    </svg>
                    <p>Despacho a Domicilio </p>
                    <input type="radio" name="despacho" id="" />
                </div>
                <div className={s.tienda}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                        <path d="M14.0625 5.81795L13.125 3.00545C13.0924 2.90843 13.0289 2.82475 12.9443 2.76719C12.8596 2.70964 12.7585 2.68137 12.6562 2.6867H2.34375C2.24153 2.68137 2.14038 2.70964 2.05573 2.76719C1.97109 2.82475 1.90761 2.90843 1.875 3.00545L0.937499 5.81795C0.930746 5.86773 0.930746 5.91818 0.937499 5.96795V8.78045C0.937499 8.90477 0.986885 9.024 1.07479 9.11191C1.1627 9.19982 1.28193 9.2492 1.40625 9.2492H1.875V13.9367H2.8125V9.2492H5.625V13.9367H13.125V9.2492H13.5937C13.7181 9.2492 13.8373 9.19982 13.9252 9.11191C14.0131 9.024 14.0625 8.90477 14.0625 8.78045V5.96795C14.0693 5.91818 14.0693 5.86773 14.0625 5.81795ZM12.1875 12.9992H6.5625V9.2492H12.1875V12.9992ZM13.125 8.3117H11.25V6.4367H10.3125V8.3117H7.96875V6.4367H7.03125V8.3117H4.6875V6.4367H3.75V8.3117H1.875V6.04295L2.68125 3.6242H12.3187L13.125 6.04295V8.3117Z" fill="#EB00D3" />
                    </svg>
                    <p>Retiro en Tienda GRATIS</p>
                    <input type="radio" name="despacho" id="" />
                </div>
            </div>
        </div>
    )
}

export default Delivery