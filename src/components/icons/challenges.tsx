import { theme } from "@src/stitches.config";

export const Challenges = ({ isSelected }: { isSelected: boolean }) => {
  const fillIcon = isSelected ? theme.colors.blue900 : theme.colors.gray500;

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 4.2C9.76018 4.2 9.16791 4.46237 7.75524 5.11031L5.79584 6.00902C5.09089 6.33236 4.6024 6.55727 4.28578 6.74761C4.25484 6.76621 4.22695 6.78367 4.20186 6.8C4.22695 6.81633 4.25484 6.83379 4.28578 6.85239C4.6024 7.04273 5.09089 7.26764 5.79584 7.59098L7.75524 8.48969C9.16791 9.13763 9.76018 9.4 10.5 9.4C11.2398 9.4 11.8321 9.13763 13.2448 8.48969L15.2042 7.59098C15.9091 7.26764 16.3976 7.04273 16.7142 6.85239C16.7452 6.83379 16.773 6.81633 16.7981 6.8C16.773 6.78367 16.7452 6.76621 16.7142 6.74761C16.3976 6.55727 15.9091 6.33236 15.2042 6.00902L13.2448 5.11031C11.8321 4.46237 11.2398 4.2 10.5 4.2ZM7.44727 3.95912C8.75666 3.35837 9.53775 3 10.5 3C11.4623 3 12.2433 3.35837 13.5527 3.95912C13.5794 3.97136 13.6063 3.9837 13.6334 3.99614L15.6245 4.90936C16.2904 5.21481 16.8299 5.46221 17.2001 5.68481C17.3875 5.79746 17.5691 5.92518 17.7091 6.07915C17.8529 6.23735 18 6.47726 18 6.8C18 7.12274 17.8529 7.36265 17.7091 7.52085C17.5691 7.67482 17.3875 7.80254 17.2001 7.91519C16.9548 8.06268 16.6352 8.22106 16.2537 8.4C16.6352 8.57894 16.9548 8.73732 17.2001 8.88481C17.3875 8.99746 17.5691 9.12518 17.7091 9.27915C17.8529 9.43735 18 9.67726 18 10C18 10.3227 17.8529 10.5627 17.7091 10.7209C17.5691 10.8748 17.3875 11.0025 17.2001 11.1152C16.9548 11.2627 16.6352 11.4211 16.2537 11.6C16.6352 11.7789 16.9548 11.9373 17.2001 12.0848C17.3875 12.1975 17.5691 12.3252 17.7091 12.4791C17.8529 12.6373 18 12.8773 18 13.2C18 13.5227 17.8529 13.7627 17.7091 13.9209C17.5691 14.0748 17.3875 14.2025 17.2001 14.3152C16.8299 14.5378 16.2905 14.7852 15.6245 15.0906L13.6334 16.0039C13.6063 16.0163 13.5794 16.0286 13.5527 16.0409C12.2433 16.6416 11.4623 17 10.5 17C9.53775 17 8.75666 16.6416 7.44727 16.0409C7.4206 16.0286 7.3937 16.0163 7.36657 16.0039L5.37551 15.0906C4.70954 14.7852 4.17014 14.5378 3.79986 14.3152C3.61246 14.2025 3.43092 14.0748 3.29093 13.9209C3.1471 13.7627 3 13.5227 3 13.2C3 12.8773 3.1471 12.6373 3.29093 12.4791C3.43092 12.3252 3.61246 12.1975 3.79986 12.0848C4.0452 11.9373 4.3648 11.7789 4.74627 11.6C4.3648 11.4211 4.0452 11.2627 3.79986 11.1152C3.61246 11.0025 3.43092 10.8748 3.29093 10.7209C3.1471 10.5627 3 10.3227 3 10C3 9.67726 3.1471 9.43735 3.29093 9.27915C3.43092 9.12518 3.61246 8.99746 3.79986 8.88481C4.0452 8.73732 4.3648 8.57894 4.74627 8.4C4.3648 8.22106 4.0452 8.06268 3.79986 7.91519C3.61246 7.80254 3.43092 7.67482 3.29093 7.52085C3.1471 7.36265 3 7.12274 3 6.8C3 6.47726 3.1471 6.23735 3.29093 6.07915C3.43092 5.92518 3.61246 5.79746 3.79986 5.68481C4.17015 5.46221 4.70956 5.21481 5.37555 4.90935L7.36657 3.99614C7.3937 3.9837 7.42059 3.97136 7.44727 3.95912ZM6.15079 9.04622L5.79584 9.20902C5.09089 9.53236 4.6024 9.75727 4.28578 9.94761C4.25484 9.96621 4.22695 9.98367 4.20187 10C4.22695 10.0163 4.25484 10.0338 4.28578 10.0524C4.6024 10.2427 5.09089 10.4676 5.79584 10.791L7.75524 11.6897C9.16791 12.3376 9.76018 12.6 10.5 12.6C11.2398 12.6 11.8321 12.3376 13.2448 11.6897L15.2042 10.791C15.9091 10.4676 16.3976 10.2427 16.7142 10.0524C16.7452 10.0338 16.773 10.0163 16.7981 10C16.773 9.98367 16.7452 9.96621 16.7142 9.94761C16.3976 9.75727 15.9091 9.53236 15.2042 9.20902L14.8492 9.04622L13.6334 9.60386C13.6063 9.6163 13.5794 9.62864 13.5527 9.64088C12.2433 10.2416 11.4623 10.6 10.5 10.6C9.53775 10.6 8.75666 10.2416 7.44727 9.64088C7.4206 9.62864 7.3937 9.6163 7.36657 9.60386L6.15079 9.04622ZM6.15079 12.2462L5.79584 12.409C5.09089 12.7324 4.6024 12.9573 4.28578 13.1476C4.25484 13.1662 4.22695 13.1837 4.20187 13.2C4.22695 13.2163 4.25484 13.2338 4.28578 13.2524C4.6024 13.4427 5.09089 13.6676 5.79584 13.991L7.75524 14.8897C9.16791 15.5376 9.76018 15.8 10.5 15.8C11.2398 15.8 11.8321 15.5376 13.2448 14.8897L15.2042 13.991C15.9091 13.6676 16.3976 13.4427 16.7142 13.2524C16.7452 13.2338 16.773 13.2163 16.7981 13.2C16.773 13.1837 16.7452 13.1662 16.7142 13.1476C16.3976 12.9573 15.9091 12.7324 15.2042 12.409L14.8492 12.2462L13.6334 12.8039C13.6063 12.8163 13.5794 12.8286 13.5527 12.8409C12.2433 13.4416 11.4623 13.8 10.5 13.8C9.53775 13.8 8.75666 13.4416 7.44727 12.8409C7.4206 12.8286 7.3937 12.8163 7.36657 12.8039L6.15079 12.2462Z"
        fill={fillIcon.toString()}
      />
    </svg>
  );
};
