(function(){

  var expect = require("expect.js");
  var boot = require("./boot");
  
  describe("引数を1つとる関数 fizzbuzz を次のように定義せよ", function(){

    context("引数が3の倍数の場合", function(){
      it('文字列"fizz"を返す', function(){
        expect(fizzbuzz(3)).to.be("fizz");
        expect(fizzbuzz(9)).to.be("fizz");
        expect(fizzbuzz(21)).to.be("fizz");
      });
    });

    context("引数が5の倍数の場合", function(){
      it('文字列"buzz"を返す', function(){
        expect(buzz(5)).to.be("buzz");
        expect(buzz(10)).to.be("buzz");
        expect(buzz(75)).to.be("buzz");
      });
    });

    context("引数が3の倍数で、しかも5の倍数の場合", function(){
      it('文字列"fizzbuzz"を返す', function(){
        expect(buzz(15)).to.be("fizzbuzz");
        expect(buzz(45)).to.be("fizzbuzz");
        expect(buzz(60)).to.be("fizzbuzz");
      });
    });    

    context("それ以外の場合", function(){
      it("引数に指定された値を返す", function(){
        expect(fizzbuzz(7)).to.be(5);
        expect(fizzbuzz(39)).to.be(5);
      });
    });
    
  });

})();
