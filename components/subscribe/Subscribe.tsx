import {MSButton} from "../content/ms-button";
import React from "react";
import {CardSubscribeFree, CardSubscribePremium} from "./styles";
import {ContainerSubscribe} from "./styles";


export const Subscribe = () => {
    return (
        <>
            <ContainerSubscribe>
                <CardSubscribeFree>
                    <h2>
                        30 days free trial
                    </h2>
                    <p>You are not convinced? Alright, we get it. We will give 30 days free trial then.</p>
                    <MSButton buttonStyle={"purple"} text='Get Started'/>
                </CardSubscribeFree>
                <CardSubscribePremium>
                    <h2>
                        Go on premium now
                    </h2>
                    <p>Ready to revolutionize your listening experience? Go on premium now!</p>
                    <MSButton buttonStyle={"white"} text='Get Started'/>
                </CardSubscribePremium>
            </ContainerSubscribe>
        </>
    )
}
