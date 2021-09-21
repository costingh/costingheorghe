import React, {useEffect} from 'react'
import '../styles/ContactModal.css'

function ContactModal({hideContactModal, showModal}) {

    useEffect(() => {
        const modal = document.querySelector('.contact-modal');
        if(showModal) {
            if(!modal.classList.contains('show')) {
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 500)
            }
        }
    }, [showModal])

    const hide = () => {
        const modal = document.querySelector('.contact-modal');
        modal.classList.remove('show');
        hideContactModal();
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500)
    }

    return (
        <div className="modal contact-modal fade" id="contactModal" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
                <svg width="742px" height="918px" viewBox="0 0 742 918" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <clipPath id="myClip">
                            <path d="M30.723868,23.5811095 C144.050861,7.86036983 257.377853,0 370.704846,0 C484.031838,0 597.358831,7.86036982 710.685823,23.5811095 L710.685823,23.5811095 C717.704865,24.5547922 723.272289,32.000975 724.059029,41.467178 C735.626137,180.644785 741.409692,319.822393 741.409692,459 C741.409692,598.177607 735.626137,737.355214 724.059029,876.532821 L724.05903,876.532821 C723.27229,885.999025 717.704865,893.445208 710.685824,894.418891 C597.358831,910.139631 484.031838,918 370.704846,918 C257.377853,918 144.050861,910.139631 30.7238682,894.418891 L30.7238682,894.41889 C23.7048271,893.445208 18.1374026,885.999025 17.3506626,876.532822 C5.7835542,737.355215 0,598.177607 0,459 C0,319.822393 5.78355416,180.644786 17.3506625,41.4671796 L17.3506612,41.4671794 C18.1374013,32.0009757 23.7048263,24.5547922 30.723868,23.5811095 Z" id="path-1"></path>
                        </clipPath>
                    </defs>
                </svg>
                <svg width="742px" height="768px" viewBox="0 0 742 768" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs> 
                        <clipPath id="myClip2">
                            <path d="M31.223868,19.727987 C144.550861,6.57599568 257.877853,0 371.204846,0 C484.531838,0 597.858831,6.57599567 711.185823,19.727987 C718.204865,20.5425712 723.772289,26.7720575 724.559029,34.6914953 C736.126137,151.127663 741.909692,267.563832 741.909692,384 C741.909692,500.436168 736.126137,616.872336 724.559029,733.308504 C723.77229,741.227942 718.204865,747.457429 711.185824,748.272014 C597.858831,761.424005 484.531838,768 371.204846,768 C257.877853,768 144.550861,761.424005 31.2238682,748.272014 C24.2048271,747.457429 18.6374026,741.227942 17.8506626,733.308505 C6.2835542,616.872337 0.5,500.436168 0.5,384 C0.5,267.563832 6.28355416,151.127664 17.8506625,34.6914967 C18.6374013,26.7720581 24.2048263,20.5425712 31.223868,19.727987 Z" id="path-1"></path>
                        </clipPath>
                    </defs>
                </svg>
                <div className="modal-content" style={{backgroundImage: 'url(./assets/images/contact-modal-illustration.png)'}}>
                    <span data-dismiss="modal" onClick={hide}>
                        <img src="./assets/icons/modal-close.png"/>
                    </span>
                    <div className="modal-body">
                        <div className="modal-success">
                            <div className="text-center">
                                <h3>Thank You!</h3>
                                <p>We will be in contact with you within 1 to 2 working dasys!</p>
                            </div>
                        </div>
                        <div className="modal-form show">
                            <div>
                                <div className="form-wrapper">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default ContactModal
