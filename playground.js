const NFTs=[]

function mintNFT(_name, _eyecolor,_shirtType,_bling){
  const NFT={
    "name":_name,
    "eyecolor":_eyecolor,
    "shirtType":_shirtType,
    "bling":_bling
  }
  NFTs.push(NFT)
  console.log("Minted"+ _name)
}

function listNFTs(){
  for(let i=0;i<NFTs.length;i++){
    console.log("\nID: \t\t "+ (i+1))
    console.log("\nName: \t\t "+NFTs[i].name)
    console.log("\nEyecolor: \t "+NFTs[i].eyecolor)
    console.log("\nShirt Type: "+NFTs[i].shirtType)
    console.log("\nBling: \t\t "+NFTs[i].bling)
  }
}

function gettotalSupply(){
  console.log(NFTs.length)
}

mintNFT("NFT1","blue","t-shirt","gold")
mintNFT("NFT2","green","t-shirt","silver")
mintNFT("NFT3","red","t-shirt","bronze")
mintNFT("NFT4","purple","t-shirt","platinum") 
mintNFT("NFT5","yellow","t-shirt","diamond")  
mintNFT("NFT6","orange","t-shirt","gold")
mintNFT("NFT7","black","t-shirt","silver")
listNFTs()
gettotalSupply()