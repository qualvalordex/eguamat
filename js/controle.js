function pid(Mo,t,K,T1,T2){
    //Mo: Overshoot desejado
    //t: Tempo de assentamento
    //K: Ganho estático
    //T1: Constante de tempo (polo1)
    //T1: Constante de tempo (polo2)
    pi = Math.PI;//Pi da bilbioteca Math.js

    //Amortecimento Relativo
    csi = (-1*(Math.log((Mo/100))))/(raizq(pot(pi,2)+(pot((Math.log((Mo/100))),2))));

    //Frequência Natural
    Wn = (4)/(t*csi);

    //Controlador Proporcional (P)
    Kp = 20*(pot(csi,2)*pot(Wn,2)*T1*T2)+((pot(Wn,2)*T1*T2)-1)/(K);

    //Controlador Integral (I)
    Ki = (10*csi*(pot(Wn,3))*T1*T2)/(K);

    //Controlador Progressivo (D)
    Kd = (12*csi*Wn*T1*T2-T1-T2)/(K);

    return ['csi:'+csi,'<br/>','Wn:'+Wn,'<br/>','Proporcional:'+Kp,'<br/>','Integral:'+Ki,'<br/>','Progressivo:'+Kd];
}