import * as React from 'react';
import { FlatList } from 'react-native';
import { List, Divider, useTheme } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import Playlists from './components/Playlists';
import Members from './components/Members';
import ScoreKeeper from './components/ScoreKeeper';
import ScoreKeeperControls from './components/ScoreKeeperControls';
import BlinkApp from './components/stateManagement';
import ActivityIndicatorExample from './Examples/ActivityIndicatorExample';
import AppbarExample from './Examples/AppbarExample';
import AvatarExample from './Examples/AvatarExample';
import BadgeExample from './Examples/BadgeExample';
import BannerExample from './Examples/BannerExample';
import ButtonExample from './Examples/ButtonExample';
import CardExample from './Examples/CardExample';
import CheckboxExample from './Examples/CheckboxExample';
import ChipExample from './Examples/ChipExample';
import DataTableExample from './Examples/DataTableExample';
import DialogExample from './Examples/DialogExample';
import DividerExample from './Examples/DividerExample';
import FABExample from './Examples/FABExample';
import IconButtonExample from './Examples/IconButtonExample';
import ListAccordionExample from './Examples/ListAccordionExample';
import ListAccordionExampleGroup from './Examples/ListAccordionGroupExample';
import ListSectionExample from './Examples/ListSectionExample';
import MenuExample from './Examples/MenuExample';
import ProgressBarExample from './Examples/ProgressBarExample';
import RadioButtonExample from './Examples/RadioButtonExample';
import RadioButtonGroupExample from './Examples/RadioButtonGroupExample';
import SearchbarExample from './Examples/SearchbarExample';
import SnackbarExample from './Examples/SnackbarExample';
import SurfaceExample from './Examples/SurfaceExample';
import SwitchExample from './Examples/SwitchExample';
import TextExample from './Examples/TextExample';
import TextInputExample from './Examples/TextInputExample';
import ToggleButtonExample from './Examples/ToggleButtonExample';
import TouchableRippleExample from './Examples/TouchableRippleExample';

export const menus: Record<
  string,
  React.ComponentType<any> & { title: string }
> = {
  // activityIndicator: ActivityIndicatorExample,
  button: ScoreKeeper,
  card: Playlists,
  avatar: Members,
  stateDemo:BlinkApp,
  
  // badge: BadgeExample,
  // banner: BannerExample,
  // bottomNavigation: ScoreKeeperControls,

  // card: CardExample,
  // checkbox: CheckboxExample,
  // chip: ChipExample,
  // dataTable: DataTableExample,
  // dialog: DialogExample,
  // divider: DividerExample,
  // fab: FABExample,
  // iconButton: IconButtonExample,
  // listAccordion: ListAccordionExample,
  // listAccordionGroup: ListAccordionExampleGroup,
  // listSection: ListSectionExample,
  // menu: MenuExample,
  // progressbar: ProgressBarExample,
  // radio: RadioButtonExample,
  // radioGroup: RadioButtonGroupExample,
  // searchbar: SearchbarExample,
  // snackbar: SnackbarExample,
  // surface: SurfaceExample,
  // switch: SwitchExample,
  // text: TextExample,
  // textInput: TextInputExample,
  // toggleButton: ToggleButtonExample,
  // touchableRipple: TouchableRippleExample,
};

type Props = {
  navigation: StackNavigationProp<{ [key: string]: undefined }>;
};

type Item = {
  id: string;
  data: typeof menus[string];
};

const data = Object.keys(menus).map(
  (id): Item => ({ id, data: menus[id] })
);

export default function Menu105({ navigation }: Props) {
  const renderItem = ({ item }: { item: Item }) => (
    <List.Item
      title={item.data.title}
      onPress={() => navigation.navigate(item.id)}
    />
  );

  const keyExtractor = (item: { id: string }) => item.id;

  const { colors } = useTheme();
  const safeArea = useSafeArea();

  return (
    <FlatList
      contentContainerStyle={{
        backgroundColor: colors.background,
        paddingBottom: safeArea.bottom,
      }}
      ItemSeparatorComponent={Divider}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      data={data}
    />
  );
}
