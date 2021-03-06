// Use Amazon S3 for images
// grunt s3upload
module.exports = {
  options: {
    profile: '<%= secrets.s3.profile %>', // See README for secrets.json
    region: '<%= secrets.s3.region %>', // Enter region or leave blank for US Standard region
    uploadConcurrency: 5, // 5 simultaneous uploads
    downloadConcurrency: 5 // 5 simultaneous downloads
  },

  prod: {
    options: {
      bucket: '<%= secrets.s3.bucket %>', // Define your S3 bucket name in secrets.json
      differential: true, // Only uploads the files that have changed
      params: {
        CacheControl: '2000'
      }
    },
    files: [
      {expand: true, cwd: '<%= paths.dist_img %>', src: ['**'], dest: '<%= secrets.s3.bucketdir %>/<%= paths.dist_img %>'}
    ]
  }
};
