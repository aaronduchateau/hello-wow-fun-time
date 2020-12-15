<template>
  <div class="full-page-holder">
    <div class="instructions">
      <h1>Pool Entry</h1>
      <div class="maxWidth500Center">
        <h2>This is step 2.</h2>
        The goal of this step is aquire an <b>interactive wallet</b> you will need to enter the pool. A wallet is a piece of technology that allows you to hold your ETH balance. <br/><br/>Just like a normal wallet allows you to hold cash in your pocket, a digital wallet allows you to hold 'cash' on the internet. Some services provide wallets that are very simple, and some services provide wallets that can do neat things like connect to Dapps (Decentralized Apps). <br /><br />Every wallet is unique, and has it's own set of addresses. Think of these like an account number on your bank account. You can send money between wallet addresses just like you can send money between different bank accounts.
        <br />
        <br />
        In order to enter the pool, you are going to need a cutting edge wallet called <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">Metamask.</a> 
        <br/><br/><br/>
        <img src="../assets/metamask.png" class="step-img-resource" />
       
          <br/><br/><br/>
          Metamask's logo is a fox, and it is <i>cute as fuck</i>. Here is a neat video that explains how cool metamask is. While you don't technically have to watch this, the video itself is pretty rad. So if nothing else, watch it for the entertainment value. 
             <br/><br/><br/>
          <iframe width="500" height="315" src="https://www.youtube.com/embed/YVgfHZMFFFQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           <br/><br/><br/>
            <h2>Well that's cool and all, <br/>but why do i need it?</h2>
          <b>DHedge</b> is a Dapp (decentralized appliation), and that is where our pool 'lives'. <br /><br />It is best accessed (and easiest to connect to) in a web browser, on a Laptop Computer. <br/>  <br/> While there are a variety of ways to use a digital wallet like <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">Metamask</a>, for the sake of this tutorial, I recommend using the <a href="https://www.google.com/chrome/">google chrome web browser</a>, and installing the <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">metamask chrome extension</a>.
             <br/><br/><br/>
             Here is a really easy video that explains how to install the metamask plugin. 
              <br/><br/><br/>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/z9QB1lADbOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <br/><br/><br/><br/>
             After you have followed the steps in the video above, and have Metamask installed in the google chrome web browser, you are ready for step 3!

      <br /><br /><br/>
      <SimpleCard styleWidth="500px">
        <h2>Good Job! That wasn't so bad was it?</h2>
        <p>( Let's be honest, It kinda was.... )</p>

        <a class="btn btn-blue" v-on:click="onNavigateBegin()">Do Step 3</a>
      </SimpleCard>
<br/><br/>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mainstream",
  methods: {
    onNavigateBegin: function () {
      this.$router.push("step-three");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.full-page-holder {
  margin-left: 0px;
}
.instructions-img {
  max-width: 100%;
}

.instructions {
  width: 100%;
}
.btn {
  display: block;
  margin-top: 20px;
}
.red-date {
  color: red;
  font-weight: bold;
}
</style>
