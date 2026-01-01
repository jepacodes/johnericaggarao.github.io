# GitHub Pages Deployment Instructions

## Step 1: Enable GitHub Pages

1. Go to: https://github.com/jepacodes/johnericaggarao.github.io
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar (under "Code and automation")
4. Under **Build and deployment**:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

## Step 2: Verify Workflow Permissions

1. Still in Settings, go to **Actions** → **General**
2. Under **Workflow permissions**, make sure:
   - "Read and write permissions" is selected
   - "Allow GitHub Actions to create and approve pull requests" is checked (optional)
3. Click **Save**

## Step 3: Trigger Deployment

After enabling Pages:
1. Go to the **Actions** tab
2. You should see the workflow running automatically
3. Or click **"Run workflow"** → **"Run workflow"** button to trigger it manually

## Your Website URL

Once deployed, your site will be available at:
**https://jepacodes.github.io/johnericaggarao.github.io**

## Troubleshooting

If you still see errors:
- Make sure the repository is public (or you have GitHub Pro/Team)
- Verify Pages is enabled in Settings → Pages
- Check that "GitHub Actions" is selected as the source (not a branch)

