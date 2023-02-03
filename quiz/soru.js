function Soru(soruMetni,cevapSecenekleri,dogruCevap){ // todo CONSTRUCTOR  <===
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    this.cevabiKontrolEt = function(cevap){
        return cevap === this.dogruCevap;
    }
}
// let soru1 = new Soru("hangisi uçabilen bir varlıktır?",{ a : "koala",b : "kaplan", c : "yarasa", },"c");
// let soru2 = new Soru("hangisi koşabilen bir varlıktır?",{ a : "koala",b : "kaplan", c : "yarasa" },"b");

let sorular = [
new Soru("1-hangisi koşabilen bir varlıktır?",{ a : "koala",b : "kaplan", c : "yarasa", d:"yılan" },"b"),
new Soru("2-hangisi yüzen bir varlıktır?",{ a : "balık",b : "kaplan", c : "yarasa",d:"yılan" },"a"),
new Soru("3-hangisi uçabilen bir varlıktır?",{ a : "koala",b : "kaplan", c : "yarasa",d:"yılan" },"c"),
new Soru("4-hangisi sürünen bir varlıktır?",{ a : "koala",b : "kaplan", c : "yarasa",d:"yılan" },"d"),

]