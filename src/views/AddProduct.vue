<template>
  <div class="add-product">
    <div class="box">
      <div class="box-content">
        <div class="row">
          <div class="image">
            <img src="https://via.placeholder.com/164" alt="" />
            <button type="button">BROWSE...</button>
          </div>
          <div class="form">
            <span class="title">Add Product</span>
            <form>
              <div class="form-row">
                <label for=""> Name : </label>
                <input type="text" />
              </div>
              <div class="form-row">
                <label for=""> Description : </label>
                <input type="text" />
              </div>
              <div class="form-row">
                <label for=""> Price : </label>
                <input type="text" />
              </div>
              <div class="actions">
                <button type="submit" class="btn btn-green">SAVE</button>
                <button type="button" class="btn btn-orange">CANCEL</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewsAddProduct",
};
</script>

<style lang="scss">
.add-product {
  padding-left: 160px;
  width: 100%;
  .box {
    padding: 60px;
  }
  .box-content {
    width: 100%;
    .row {
      display: flex;
      width: 100%;
      .image {
        width: 260px;
        margin-top: 30px;
        img {
          width: 164px;
          height: 164px;
        }
        button {
          display: block;
          margin-top: 5px;
          width: 164px;
          height: 37px;
          color: rgb(3, 3, 3);
          background-color: rgb(255, 255, 255);
          font-weight: 500;
          font-size: 16px;
          letter-spacing: 1px;
          text-align: center;
          text-transform: uppercase;
          line-height: 15px;
          padding: 0px;
          border-radius: 0px;
          border: 1px solid rgb(3, 3, 3);
        }
      }
      .form {
        width: 100%;
        .title {
          display: block;
          color: rgb(3, 3, 3);
          font-size: 30px;
          margin-bottom: 70px;
        }
        .form-row {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          label {
            font-size: 20px;
            width: 160px;
          }
          input {
            display: block;
            outline: none;
            width: 200px;
            height: 39px;
            color: rgb(3, 3, 3);
            background-color: rgb(238, 238, 238);
            font-size: 20px;
            letter-spacing: 0px;
            line-height: 39px;
            padding: 10px;
            border: 1px solid rgb(0, 0, 0);
          }
        }
        .actions {
          margin-top: 80px;
          width: 290px;
          display: flex;
          margin-left: 60px;
          justify-content: space-between;
          .btn {
            display: block;
            outline: none;
            width: 120px;
            height: 33px;
            color: rgb(255, 255, 255);
            background-color: rgb(59, 137, 5);
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 1px;
            text-align: center;
            text-transform: uppercase;
            line-height: 13px;
            padding: 0px;
            border-radius: 0px;
            border: 0px;
            &.btn-orange {
              background-color: rgb(247, 141, 10);
            }
            &.btn-green {
              background-color: rgb(59, 137, 5);
            }
          }
        }
      }
    }
  }
}
</style>
