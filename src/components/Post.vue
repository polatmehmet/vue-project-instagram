<template>
  <div class="post">

    <!-- header -->
    <div class="header section">
      <div class="header-author">
        <Avatar :size="40"/>
        <div class="header-author-info">
          <div>
            <CustomText tag="b">mehmetpolat</CustomText>
          </div>
          <div>
            <CustomText size="xsmall">Ümraniye, İSTANBUL</CustomText>
          </div>
        </div>
      </div>
      <div class="header-more">
        <button type="button">
          <IconMore />
        </button>
      </div>
    </div>
    <!-- media -->
    <div class="post-media">
      <img src="https://www.fillmurray.com/650/500" alt="">
    </div>
    <!-- action buttons -->
    <div class="action-buttons section">
      <button type="button">
        <IconLike />
      </button>
      <button type="button">
        <IconComment />
      </button>
      <button type="button">
        <IconDirect />
      </button>
      <button class="action-save" type="button">
        <IconSave />
      </button>
    </div>
    <!-- view count -->
    <div class="view-count section">
      <CustomText tag="b">1.345 beğenme</CustomText>
    </div>
    <!-- comment list -->
    <!-- date time -->
    <!-- comment form -->

    <slot />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import CustomText from '@/components/CustomText';
import IconMore from '@/icons/more.svg';
import IconLike from '@/icons/like.svg';
import IconDirect from '@/icons/direct.svg';
import IconComment from '@/icons/comment.svg';
import IconSave from '@/icons/save.svg';

  export default {
    name: 'Post',
    components: {
      Avatar,
      CustomText,
      IconMore,
      IconLike,
      IconDirect,
      IconComment,
      IconSave,
    }
  }
</script>

<style lang="scss" scoped>
.post {
  border-radius: 3px;
  border: 1px solid rgb(var(--b6a));
}
.section {
  padding-left: 16px;
  padding-right: 16px;
}
.header {
  display: flex;
  align-items: center;
  height: 60px;
  &-author{
    display: flex;
    align-items: center;
    &-info {
      margin-left: 8px;
    }
  }
  &-more{
    margin-left: auto;
  }
}
.action-buttons {
  display: flex;
  align-items: center;
  height: 45px;
  button {
    margin-right: 16px;
  }
  .action-save {
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
