<template>
    <div id="login">

            <div class="head">
              <div class="sd"><span class="sdsd">welcome</span></div>
              <div class="name">
                 <p class=" nameDiv"><i class="el-icon-user-solid"></i></p>
              </div>
            </div>
    </div>

</template>
<style>
  #login{
     width: 100%;
    height: 100%;
    background: #000000;
    /*padding-top: 200px;*/
  }
  .sd{
    padding-top: 200px;
    color: #ededed;
    font-style:  italic;
    font-size: 50px;

  }
  .sdsd{
    display: inline-block;
    animation: headfont 2s;
  }
  @keyframes headfont {
    from{
      margin-top: -200px;
      color: #000;
    }
    to{
      margin-top: 0;
      color: #ededed;
    }
  }
  .nameDiv{
    width: 200px;
    border-bottom: 2px solid #ededed;
  }
</style>
